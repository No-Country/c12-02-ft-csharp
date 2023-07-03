using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly NoCountryApiContext _dbcontext;

        public UsuarioController(NoCountryApiContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public IActionResult Get()
        {
            List<Usuario> lista = new List<Usuario>();

            try
            {
                lista = _dbcontext.Usuarios.ToList();

                return Ok(lista);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = lista });
            }
        }

        [HttpGet]
        [Route("Login")]

        public IActionResult Login(string usuario, string contrasena)
        {
            Usuario logueo = new Usuario();

            try
            {

#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                logueo = (from b in _dbcontext.Usuarios
                             where b.Nombre == usuario && b.Contrasena == contrasena
                             select b).FirstOrDefault();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.

                return Ok(logueo);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = logueo });
            }
        }

     

    }
}
