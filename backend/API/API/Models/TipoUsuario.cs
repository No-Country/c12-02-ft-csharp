using System;
using System.Collections.Generic;

namespace API.Models;

public partial class TipoUsuario
{
    public long Id { get; set; }

    public string Nombre { get; set; } = null!;

    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
