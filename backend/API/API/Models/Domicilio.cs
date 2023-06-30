using System;
using System.Collections.Generic;

namespace API.Models;

public partial class Domicilio
{
    public long Id { get; set; }

    public long IdUsuario { get; set; }

    public string Calle { get; set; } = null!;

    public string Numero { get; set; } = null!;

    public string Ciudad { get; set; } = null!;

    public string CodigoPostal { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;

    public virtual ICollection<Orden> Ordens { get; set; } = new List<Orden>();
}
