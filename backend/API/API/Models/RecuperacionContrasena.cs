using System;
using System.Collections.Generic;

namespace API.Models;

public partial class RecuperacionContrasena
{
    public long Id { get; set; }

    public long IdUsuario { get; set; }

    public string Caracteres { get; set; } = null!;

    public DateTime? MomentoGeneracion { get; set; }

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
