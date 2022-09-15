import logoImg from './assets/logo-nlw.svg';
import './styles/main.css';

function App() {
 return (
	<div className='max-w-[#1344px] mx-auto flex flex-col items-center m-20'>
		<img src={logoImg}/>

		<h1 className='text-6xl text-white font-black mt-20 bg-nlw-gradient bg-clip-text'>
			Seu <span className='text-transparent'>duo</span> está aqui.
		</h1>
	</div>
 )
}

export default App
