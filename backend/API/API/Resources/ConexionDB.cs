using Microsoft.Data.SqlClient;

namespace API.Resources
{
    public class ConexionDB
    {
        private SqlConnection conexion;
        private SqlCommand comando;
        private SqlDataReader lector;
        public SqlDataReader Lector
        {
            get { return lector; }
        }




        public ConexionDB()
        {
            conexion = new SqlConnection("Server=nocountryserver.database.windows.net ; Database=NoCountryAPI ; User ID=NoCountryAdmin ; Password=c12-02-ft-csharp ; Encrypt=True; Trusted_connection=False ; MultipleActiveResultSets=true ; TrustServerCertificate=False ; Connection Timeout=30");
            comando = new SqlCommand();
        }
        public void setearConsulta(string consulta)
        {
            comando.CommandType = System.Data.CommandType.Text;
            comando.CommandText = consulta;
        }



        public void ejecutarLectura()
        {
            comando.Connection = conexion;

            try
            {
                conexion.Open();
                lector = comando.ExecuteReader();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void setearParametro(string nombre, object valor)
        {
            comando.Parameters.AddWithValue(nombre, valor);
        }


        public void ejecutarAccion()
        {
            comando.Connection = conexion;

            try
            {
                conexion.Open();
                lector = comando.ExecuteReader();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public void cerrarConexion()
        {
            if (lector != null)
                lector.Close();
            conexion.Close();
        }
    }
}
