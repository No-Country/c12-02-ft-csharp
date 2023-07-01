using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API.Models;

public partial class NoCountryApiContext : DbContext
{
    public NoCountryApiContext()
    {
    }

    public NoCountryApiContext(DbContextOptions<NoCountryApiContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Categorium> Categoria { get; set; }

    public virtual DbSet<Domicilio> Domicilios { get; set; }

    public virtual DbSet<Marca> Marcas { get; set; }

    public virtual DbSet<MetodoPago> MetodoPagos { get; set; }

    public virtual DbSet<Orden> Ordens { get; set; }

    public virtual DbSet<OrdenDetalle> OrdenDetalles { get; set; }

    public virtual DbSet<Persona> Personas { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<RecuperacionContrasena> RecuperacionContrasenas { get; set; }

    public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=nocountryserver.database.windows.net ; Database=NoCountryAPI ; User ID=NoCountryAdmin ; Password=c12-02-ft-csharp ; Encrypt=True; Trusted_connection=False ; MultipleActiveResultSets=true ; TrustServerCertificate=False ; Connection Timeout=30");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Categorium>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Categori__3214EC07CB2FD1E9");

            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Domicilio>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Domicili__3214EC074B5E5420");

            entity.ToTable("Domicilio");

            entity.Property(e => e.Calle)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Ciudad)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CodigoPostal)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Numero)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Domicilios)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Domicilio__IdUsu__58D1301D");
        });

        modelBuilder.Entity<Marca>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Marca__3214EC07113A4638");

            entity.ToTable("Marca");

            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false);
        });

        modelBuilder.Entity<MetodoPago>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__MetodoPa__3214EC078A2F4DE8");

            entity.ToTable("MetodoPago");

            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Orden>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Orden__3214EC076581DD12");

            entity.ToTable("Orden");

            entity.HasOne(d => d.IdDomicilioNavigation).WithMany(p => p.Ordens)
                .HasForeignKey(d => d.IdDomicilio)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Orden__IdDomicil__662B2B3B");

            entity.HasOne(d => d.IdMetodoPagoNavigation).WithMany(p => p.Ordens)
                .HasForeignKey(d => d.IdMetodoPago)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Orden__IdMetodoP__671F4F74");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Ordens)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Orden__IdUsuario__65370702");
        });

        modelBuilder.Entity<OrdenDetalle>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__OrdenDet__3214EC0711E927BD");

            entity.ToTable("OrdenDetalle");

            entity.Property(e => e.Precio).HasColumnType("decimal(2, 0)");

            entity.HasOne(d => d.IdOrdenNavigation).WithMany(p => p.OrdenDetalles)
                .HasForeignKey(d => d.IdOrden)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrdenDeta__IdOrd__6AEFE058");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.OrdenDetalles)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrdenDeta__IdPro__6BE40491");
        });

        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Persona__3214EC07E1D18BB8");

            entity.ToTable("Persona");

            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Dni)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("DNI");
            entity.Property(e => e.FechaNacimiento).HasColumnType("date");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(15)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Producto__3214EC07B863F607");

            entity.ToTable("Producto");

            entity.Property(e => e.Descripcion)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Imagen)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Precio).HasColumnType("decimal(2, 0)");

            entity.HasOne(d => d.IdCaterogiaNavigation).WithMany(p => p.Productos)
                .HasForeignKey(d => d.IdCaterogia)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Producto__IdCate__4C6B5938");

            entity.HasOne(d => d.IdMarcaNavigation).WithMany(p => p.Productos)
                .HasForeignKey(d => d.IdMarca)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Producto__IdMarc__4D5F7D71");
        });

        modelBuilder.Entity<RecuperacionContrasena>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Recupera__3214EC07A0147758");

            entity.ToTable("RecuperacionContrasena");

            entity.Property(e => e.Caracteres)
                .HasMaxLength(6)
                .IsUnicode(false);
            entity.Property(e => e.MomentoGeneracion)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.RecuperacionContrasenas)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Recuperac__IdUsu__5BAD9CC8");
        });

        modelBuilder.Entity<TipoUsuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TipoUsua__3214EC07B049A4D2");

            entity.ToTable("TipoUsuario");

            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC078ED258BE");

            entity.ToTable("Usuario");

            entity.Property(e => e.Contrasena)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.IdPersonaNavigation).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.IdPersona)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Usuario__IdPerso__498EEC8D");

            entity.HasOne(d => d.IdTipoNavigation).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.IdTipo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Usuario__IdTipo__489AC854");
        });
        modelBuilder.HasSequence<int>("SalesOrderNumber", "SalesLT");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
