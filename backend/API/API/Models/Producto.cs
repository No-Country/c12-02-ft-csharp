using System;
using System.Collections.Generic;

namespace API.Models;

public partial class Producto
{
    public long Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public long IdCaterogia { get; set; }

    public long IdMarca { get; set; }

    public string Imagen { get; set; } = null!;

    public decimal Precio { get; set; }

    public int Stock { get; set; }

    public int Descuento { get; set; }

    public virtual Categorium IdCaterogiaNavigation { get; set; } = null!;

    public virtual Marca IdMarcaNavigation { get; set; } = null!;

    public virtual ICollection<OrdenDetalle> OrdenDetalles { get; set; } = new List<OrdenDetalle>();
}
