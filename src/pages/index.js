

export default function Home(data) {  
  return (
    <div className="wrapper">   
     <h1>{data.data.affirmation}</h1>    
     <button onClick={() => window.location.reload(false)}>Outra Mensagem</button> 
    </div>

  )
}


export async function getStaticProps() {
  const response = await fetch('http://afirmacao.herokuapp.com/');
  const data = await response.json();
  return {
    props: {
      data,
    },
    revalidate: 3,
  };  
}