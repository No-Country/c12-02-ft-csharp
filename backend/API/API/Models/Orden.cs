using System;
using System.Collections.Generic;

namespace API.Models;

public partial class Orden
{
    public long Id { get; set; }

    public long IdUsuario { get; set; }

    public long IdDomicilio { get; set; }

    public long IdMetodoPago { get; set; }

    public bool Envio { get; set; }

    public virtual Domicilio IdDomicilioNavigation { get; set; } = null!;

    public virtual MetodoPago IdMetodoPagoNavigation { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;

    public virtual ICollection<OrdenDetalle> OrdenDetalles { get; set; } = new List<OrdenDetalle>();
}
