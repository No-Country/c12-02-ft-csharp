﻿using System;
using System.Collections.Generic;

namespace API.Models;

public partial class Categorium
{
    public long Id { get; set; }

    public string Nombre { get; set; } = null!;

    public virtual ICollection<Producto> Productos { get; set; } = new List<Producto>();
}
