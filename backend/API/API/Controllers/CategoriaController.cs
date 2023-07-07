using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly NoCountryApiContext _dbcontext;

        public CategoriaController( NoCountryApiContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Listar")]
        public IActionResult Listar()
        {
            try
            {
                List<Categorium> lista = _dbcontext.Categoria.ToList();

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
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpGet]
        [Route("Obtener/{id:long}")]
        public IActionResult Obtener(long id)
        {
            Categorium? oCategoria = _dbcontext.Categoria.Find(id);

            if (oCategoria == null)
            {
                return BadRequest("Producto no encontrado");
            }
            
            try
            {
                oCategoria = _dbcontext.Categoria.Where(c => c.Id == id).FirstOrDefault();
                
                return Ok(oCategoria);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }


        }

        [HttpPost]
        [Route("Guardar")]
        public IActionResult Guardar([FromBody] Categorium categoria)
        {
            try
            {
                _dbcontext.Categoria.Add(categoria);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpPut]
        [Route("Editar")]
        public IActionResult Editar([FromBody] Categorium categoria)
        {
            Categorium? oCategoria = _dbcontext.Categoria.Find(categoria.Id);

            if (oCategoria == null)
            {
                return BadRequest("Producto no encontrado");
            }

            try
            {
                oCategoria.Nombre = categoria.Nombre is null ? oCategoria.Nombre : categoria.Nombre;

                _dbcontext.Categoria.Update(oCategoria);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpDelete]
        [Route("Eliminar/{id:long}")]
        public IActionResult Eliminar(long id)
        {
            Categorium? oCategoria = _dbcontext.Categoria.Find(id);

            if (oCategoria == null)
            {
                return BadRequest("Producto no encontrado");
            }

            try
            {
                _dbcontext.Categoria.Remove(oCategoria);
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
