using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        // Encapsulacion
        private readonly NoCountryApiContext _dbcontext;

        // referencia a las base de datos
        public ProductoController( NoCountryApiContext context)
        {
            _dbcontext = context;
        }

        // Mostrar todos los registros existentes
        [HttpGet]
        [Route("Lista")]
        public IActionResult Listar()
        {
            try
            {
               List<Producto> lista = _dbcontext.Productos.Include(e => e.IdMarcaNavigation).Include(p => p.IdCaterogiaNavigation).ToList();

                if (lista == null)
                {
                    return BadRequest(lista);
                }
                else
                {
                    return Ok(lista);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message});
            }
        }

        // Mostrar los registros por id
        [HttpGet]
        [Route("Obtener/{id:long}")]
        public IActionResult Obtener(long id)
        {
            Producto? oProducto = _dbcontext.Productos.Find(id);


            if (oProducto == null)
                return BadRequest("Producto no encontrado");

            try
            {
                oProducto = _dbcontext.Productos.Include(e => e.IdMarcaNavigation)
                                                .Include(p => p.IdCaterogiaNavigation)
                                                .Where(c => c.Id == id).FirstOrDefault();

                return Ok(oProducto);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message});
            }
        }

        // Agregar un registro a la base de datos
        [HttpPost]
        [Route("Guardar")]
        public IActionResult Guardar([FromBody] Producto producto)
        {
            try
            {
                _dbcontext.Productos.Add(producto);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Ok"});

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        // Editar un registro existente de en la base de datos
        [HttpPut]
        [Route("Editar")]
        public IActionResult Editar([FromBody] Producto producto)
        {
            Producto? oProducto = _dbcontext.Productos.Find(producto.Id);

            if (oProducto == null)
            {
                return BadRequest("Producto no encontrado");
            }

            try
            {
                oProducto.Nombre = producto.Nombre is null ? oProducto.Nombre : producto.Nombre;


                _dbcontext.Productos.Update(oProducto);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new {mensaje = "Ok"});
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje =  ex.Message});
            }
        }

        // Eliminar un registro existente en la base de datos
        [HttpDelete]
        [Route("Eliminar/{id:long}")]
        public IActionResult Eliminar (long id)
        {
            Producto? oProducto = _dbcontext.Productos.Find(id);

            if (oProducto == null)
            {
                return BadRequest("Producto no encontrado");
            }
            try
            {
                _dbcontext.Productos.Remove(oProducto);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }
    }


}
