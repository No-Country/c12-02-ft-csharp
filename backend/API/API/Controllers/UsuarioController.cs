using API.Models;
using API.Resources;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        // LISTAR USUARIOS DE LA DB

        [HttpGet]
        [Route("listar")]
        public dynamic listarUsuarios()
        {

            ConexionDB datos = new ConexionDB();
            List<Usuario> lista = new List<Usuario>();
            try
            {
                datos.setearConsulta("SELECT * FROM Usuario");

                datos.ejecutarLectura();

                while (datos.Lector.Read())
                {

                    Usuario aux = new Usuario();

                    aux.Nombre = (string)datos.Lector["Nombre"];
                    aux.Id = (long)datos.Lector["id"];
                    aux.Email = (string)datos.Lector["email"];
                    aux.IdPersona = (long)datos.Lector["idPersona"];
                    aux.IdTipo = (long)datos.Lector["idTipo"];
                    lista.Add(aux);

                }

                return lista;

            } catch(Exception ex)
            {
                return ex;
            }


        }

        // CONFIRMAR LOGUEO DE USUARIO

        [HttpGet]
        [Route("login")]

        public dynamic login(string usuario, string contrasena)
        {
            Usuario aux = new Usuario();
            ConexionDB datos = new ConexionDB();
            try
            {
                datos.setearConsulta("SELECT * FROM Usuario WHERE Nombre = @nombre AND Contrasena = @contrasena");
                datos.setearParametro("@nombre", usuario);
                datos.setearParametro("@contrasena", contrasena);

                datos.ejecutarLectura();

                while (datos.Lector.Read())
                {
                    aux.Nombre = (string)datos.Lector["Nombre"];
                    aux.Id = (long)datos.Lector["id"];
                    aux.Email = (string)datos.Lector["email"];
                    aux.IdPersona = (long)datos.Lector["idPersona"];
                    aux.IdTipo = (long)datos.Lector["idTipo"];
          
                }


                return aux;

            }
            catch (Exception ex)
            {
                return ex;
            }


        }

    }
}
