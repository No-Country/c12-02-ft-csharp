using System;
using System.Collections.Generic;

namespace API.Models;

public partial class OrdenDetalle
{
    public long Id { get; set; }

    public long IdOrden { get; set; }

    public long IdProducto { get; set; }

    public int Cantidad { get; set; }

    public decimal Precio { get; set; }

    public virtual Orden IdOrdenNavigation { get; set; } = null!;

    public virtual Producto IdProductoNavigation { get; set; } = null!;
}
