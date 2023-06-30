using System;
using System.Collections.Generic;

namespace API.Models;

public partial class MetodoPago
{
    public long Id { get; set; }

    public string Nombre { get; set; } = null!;

    public virtual ICollection<Orden> Ordens { get; set; } = new List<Orden>();
}
