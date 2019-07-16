using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstract_Class
{
    abstract class Transformer
    {
      

        public Transformer()
        {
            
            Console.WriteLine("Transformer Constructor.");
        }

        public void show()
        {
            Console.WriteLine("show transformer");
        }
        public abstract void run();
        
    }

    class Car : Transformer
    {
        public override void run()
        {
            Console.WriteLine("Run Car");
        }
    }

    class Boat : Transformer
    {
        public override void run()
        {
            Console.WriteLine("Run Boat");
        }
    }

    class Halicopter : Transformer
    {
        public override void run()
        {
            Console.WriteLine("Run Halicopter");
        }
    }


}
