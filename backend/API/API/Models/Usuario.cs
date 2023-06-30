using System;
using System.Collections.Generic;

namespace API.Models;

public partial class Usuario
{
    public long Id { get; set; }

    public long IdTipo { get; set; }

    public long IdPersona { get; set; }

    public string Nombre { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Contrasena { get; set; } = null!;

    public virtual ICollection<Domicilio> Domicilios { get; set; } = new List<Domicilio>();

    public virtual Persona IdPersonaNavigation { get; set; } = null!;

    public virtual TipoUsuario IdTipoNavigation { get; set; } = null!;

    public virtual ICollection<Orden> Ordens { get; set; } = new List<Orden>();

    public virtual ICollection<RecuperacionContrasena> RecuperacionContrasenas { get; set; } = new List<RecuperacionContrasena>();
}
