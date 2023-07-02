using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly NoCountryApiContext _dbcontext;

        public ProductoController( NoCountryApiContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public IActionResult Get()
        {
            List<Producto> lista = new List<Producto>();

            try
            {
                lista = _dbcontext.Productos.ToList();

                return Ok(lista);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = lista });
            }
        }
    }
}
