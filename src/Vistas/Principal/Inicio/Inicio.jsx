
import logo from '../../../assets/bannerprevencióndellavado.jpg';


const Home = () => {
    return ( 
        <div className = "text-center font-serif">
       

            <img className='w-full md:m-2' src={logo} alt='logo-lavado'/>
            
            
        <div >
            
            <div className=''>
              
                <h4 className=' text-left font-bold md:ml-9 mb-5'>
                    Lavado de Activos
                </h4>
                <p className=' text-justify md:m-8' >
                    El Lavado de Activos es la actividad criminal
                    que consiste en disfrazar el origen de fondos 
                    obtenidos de actividades ilegales para dar apariencia
                    de que estos provienen de una fuente legal. Según las 
                    características específicas del producto, servicio o 
                    cliente en particular, los riesgos no son siempre los mismos. 
                    Diversos factores, como la cantidad y volumen de las transacciones,
                    las ubicaciones geográficas y el carácter de las relaciones con el cliente,
                    deben tenerse en cuenta cuando el banco prepara su evaluación de riesgos. Las
                    diferencias en la manera en que el banco interactúa con el cliente (contacto 
                    directo o por medio de banca electrónica) también deben tenerse en cuenta.
                </p>
               
            </div>
      
        </div>
     
        <div >
            
            <div className=' border-solid border-2 border-sky-500 md:m-4'>
              
                <h4 className='font-bold m-3'>
                    Misión
                </h4>
                <p >
                “ Somos una institución financiera orientada a empresas e individuos
                 emprendedores. Satisfacemos las necesidades 
                 financieras de nuestros clientes, acompañándoles
                 a crecer a través de una relación personalizada, ofreciendo
                 productos y servicios creados a su medida y entregados con un 
                 estilo de servicio único, oportuno y excepcional, agregando valor
                 a su negocio y mejorando su calidad de vida.  Ofrecemos una inversión 
                 segura y rentable a nuestros accionistas.  Promovemos el desarrollo de nuestros 
                 colaboradores y de nuestra comunidad ”.

                </p>
               
            </div>
      
    </div>
       
        <div className='border-solid border-2 border-green-400 md:m-4'>
            
                <div>
                  
                    <h4 className='font-bold m-3'>
                        Visión
                    </h4>
                    <p >
                        Ser el Banco preferido de nuestros clientes, 
                        ofreciendo un servicio conveniente, transparente, 
                        simple, con un equipo de personas capaces y motivadas
                        a ofrecer un beneficio tangible.

                    </p>
                   
                </div>
          
        </div>

        <div className='text-justify md:m-5'>
            
            <div className='md:m-4'>
              
                <h4  className='font-bold md:m-4 '>
                    Valores
                </h4>
                
                
                <span className='text-blue-700 md:m-5'>-*- Experiencia de cliente</span>
               
                <p className='md:m-7'>
                    Enfocamos nuestro esfuerzo poniendo al cliente en el centro, ofreciendo la mejor experiencia en cada interacción con el Banco.
                </p>
                <span className='text-blue-700 md:m-5'>-*- Orientación a resultados</span>
                <p className='md:m-7'>
                    Nos trazamos metas desafiantes que disfrutamos lograr, trabajando con eficiencia y productividad, para alcanzar nuestra aspiración y retribuir a nuestros clientes, colaboradores y accionistas.
                </p>


                <span className='text-blue-700 md:m-5'>-*- Reconocimiento</span>
                <p className='md:m-7'>
                    Valoramos y reconocemos las conductas que promuevan un liderazgo participativo, confiable, valiente y que aporte al cumplimiento de nuestra aspiración.
                </p>
              
                <span className='text-blue-700 md:m-5'>-*- Nuestra Gente</span>
                <p className='md:m-7'>
                    Nos esforzamos por conocer los intereses y necesidades de nuestros colaboradores, ofreciéndoles el mejor lugar para crecer y desarrollar su potencial, construyendo un plan de carrera alineado con sus intereses personales y profesionales.
                </p>

                <span className='text-blue-700 md:m-5'>-*- Compromiso y orgullo de pertenecer</span>
                <p className='md:m-7'>
                    Nuestros colaboradores trabajan con integridad y pasión, siendo promotores de nuestra cultura.
                </p>
                
               
            </div>
      
        </div>

        
    </div>

     );
}
 
export default Home;