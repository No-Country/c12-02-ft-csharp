using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Xml.Serialization;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcaController : ControllerBase
    {
        private readonly NoCountryApiContext _dbcontext;

        public MarcaController( NoCountryApiContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Listar")]
        public IActionResult Listar()
        {
            try
            {
                List<Marca> lista = _dbcontext.Marcas.ToList();

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
            Marca? oMarca = _dbcontext.Marcas.Find(id);

            if (oMarca == null)
            {
                return BadRequest("Marca no encontrada");
            }

            try
            {
                oMarca = _dbcontext.Marcas.Where(c => c.Id == id).FirstOrDefault();
                return Ok(oMarca);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpPost]
        [Route("Guardar")]
        public IActionResult Guardar([FromBody] Marca marca)
        {
            try
            {
                _dbcontext.Marcas.Add(marca);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new {mensaje = "Ok"});
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpPut]
        [Route("Editar")]
        public IActionResult Editar([FromBody] Marca marca)
        {
            Marca? oMarca = _dbcontext.Marcas.Find(marca.Id);

            if (oMarca == null)
            {
                return BadRequest("La marca no existe");
            }
            
            try
            {
                oMarca.Nombre = marca.Nombre is null ? oMarca.Nombre : marca.Nombre;

                _dbcontext.Marcas.Update(oMarca);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
                throw;
            }
        }

        [HttpDelete]
        [Route("Eliminar/{id:long}")]
        public IActionResult Eliminar(long id)
        {
            Marca? oMarca = _dbcontext.Marcas.Find(id);

            if (oMarca == null)
            {
                return BadRequest("Marca no encontrada");
            }

            try
            {
                _dbcontext.Marcas.Remove(oMarca);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
                throw;
            }
        }
    }
}
