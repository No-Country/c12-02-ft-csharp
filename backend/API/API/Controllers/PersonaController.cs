using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly NoCountryApiContext _dbcontext;

        public PersonaController(NoCountryApiContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public IActionResult Get()
        {
            List<Persona> lista = new List<Persona>();

            try
            {
                lista = _dbcontext.Personas.ToList();

                return Ok(lista);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = lista });
            }
        }

        [HttpGet]
        [Route("BuscarPorID")]
        public IActionResult GetByID(long id)
        {
            Persona aBuscar = new Persona();

            try
            {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                aBuscar = _dbcontext.Personas.Find(id);
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.

                return Ok(aBuscar);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = aBuscar });
            }
        }





    }
}
