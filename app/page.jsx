import Projects from "@/components/projects";

export default function Home() {

  const projects_items = [
    { id: 1,name:'Gobernación de Santander T1',url:'http://18.223.105.203:8086/development/sure/',url_admin:'http://18.223.105.203:8086/development/sure/',img:'/img_paneles/gobernacion.jpg',status:true },{ id: 2,name:'Gobernación de Santander T2',url:'http://18.223.105.203:8086/development/sure/',url_admin:'http://18.223.105.203:8086/development/sure/',img:'/img_paneles/gobernacion.jpg',status:true },{ id: 3,name:'Catay',url:'http://18.223.105.203:8086/development/sure/',url_admin:'http://18.223.105.203:8086/development/sure/',img:'/img_paneles/catay.jpeg',status:true }
  ]
  
  return (
    <div className="flex flex-col gap-3 p-6 lg:ml-64">
      {
        projects_items.map((items) =>(
          <Projects key={items.id} data={items}></Projects>
         ) )
      }
    </div>
  );
}
