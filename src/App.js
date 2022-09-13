import './App.css';
import { IdCard } from './component/IdCard';
import { Iteration } from './component/Iteration';
import { Greetings } from './component/Greetings';
import { Random } from './component/Random';
import { BoxColor } from './component/BoxColor';
import { CreditCard } from './component/CreditCard';
import { Rating } from './component/Rating';
import { DriverCard } from './component/DriverCard';
import { Likes } from './component/Likes';
import { ClickablePicture } from './component/ClickablePicture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Iteration num="1">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </Iteration>
      <Iteration num="2">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </Iteration>
      <Iteration num="3">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </Iteration>
      <Iteration num="4">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </Iteration>

      <Iteration num="5">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </Iteration>
      <Iteration num="6">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </Iteration>
      <Iteration num="7">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </Iteration>
      <Iteration num="8">
        <Likes />
        <Likes />
      </Iteration>
      <Iteration num="9">
        <ClickablePicture
          img="./assets/images/maxence.png"
          imgClicked="./assets/images/maxence-glasses.png"
        />
      </Iteration>
      <Iteration num="10"></Iteration>
      <Iteration num="11"></Iteration>
      <Iteration num="12"></Iteration>
      <Iteration num="13"></Iteration>
      <Iteration num="14"></Iteration>
      <Iteration num="15"></Iteration>
    </div>
  );
}

export default App;
