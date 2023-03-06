import Title from './constants/title/Title';
import Text from './constants/text/Text';
import Button from './constants/button/Button';
import Card from './constants/card/Card';
import Container from './constants/container/Container';

const App = props => {
	return (
		<>
			<Title text='SEDANS' />
			<Text text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' />
			<Button text='Learn More' />
			<Title text='SUVS' />
			<Text text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' />
			<Button text='Learn More' />
			<Title text='LUXURY' />
			<Text text='Soy un Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' />
			<Button text='Learn More' />
		</>
	);
};

export default App;
