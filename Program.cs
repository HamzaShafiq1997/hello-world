using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstract_Class
{
    class Program
    {
        static void Main(string[] args)
        {
            //Transformer trans = new Transformer(); //Error

            Transformer trans = new Car();
            trans.run();
            trans.show();

            trans = new Boat();
            trans.run();

            trans = new Halicopter();
            trans.run();
        }
    }
}
