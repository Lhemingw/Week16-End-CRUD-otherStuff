import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
export default function AboutFinance() {
//add week9 here budget stuff	
		return (
		<>
			<div className ="mt-5">
			<h2 className='text-center'>About Finance Page</h2>
	<p>Hi, my finances are really good and you can check it out over in the finances page!</p>
	<h3 className='text-center'>BUDGET PERCENTS</h3>
	<p>I use in my budget a 80/20 formula, 
   20 % to save into Roth/Emergancy save-or other savings.</p>

{/* <!-------HOUSING-------> */}
	<section>
	<h3 className='text-center'>HOUSING 25%</h3>
	<ListGroup as="ul" striped bordered hover size='sm'className="table-bordered-success">
      <ListGroup.Item as="li" active>
	  Rent/Morgage
      </ListGroup.Item>
      <ListGroup.Item as="li">Utilites(water, electricity, internet, and etc)</ListGroup.Item>
      <ListGroup.Item as="li" active>
	  Things you buy for the house to fix or to help it look nice
      </ListGroup.Item>
      <ListGroup.Item as="li"active>Any I missed</ListGroup.Item>
    </ListGroup>
	
	</section>
	
	
{/* <!---------PERSONAL-------> */}
<section>
	<h3 className="text-center">PERSONAL 20%</h3>
<p>This is where you put the stuff you use for you in the bathroom, and etc</p>
<ListGroup as="ul" striped bordered hover size='sm'className="table-bordered-success">
      <ListGroup.Item as="li" active>
	  Make up
      </ListGroup.Item>
      <ListGroup.Item as="li">Face soap/other soap</ListGroup.Item>
      <ListGroup.Item as="li" active>Toothpaste/Floss</ListGroup.Item>
      <ListGroup.Item as="li"active>Women/Men stuff</ListGroup.Item>
      <ListGroup.Item as="li" active>Clothes</ListGroup.Item>
      <ListGroup.Item as="li" active>Anything else I missed</ListGroup.Item>
    </ListGroup>	
	</section>


{/* <!---------FOOD----------->  */}
<section>
	<h3 className='text-center'>FOOD 30%</h3>
<p>This is where you put food you eat</p>
<ListGroup as="ul"striped bordered hover size='sm' className="table-bordered-success">
	<ListGroupItem as="li"active>Green/Red Chile</ListGroupItem>
	<ListGroupItem as="li" active>NM drinks</ListGroupItem>
	<ListGroupItem as="li">Other food</ListGroupItem>
</ListGroup>
</section>
{/* <!---------TRANSPORTATION-----> */}
<section>
	<h3 className='text-center'>TRANSPORTATION 10%</h3>
<p>This is where you put the stuff you buy for your car,
	or how you get to where you need to go </p>
<ListGroup as="ul"striped bordered hover size='sm' className="table-bordered-success">
	<ListGroupItem as="li"active>Gas</ListGroupItem>
	<ListGroupItem as="li" active>Car Loans/etc</ListGroupItem>
	<ListGroupItem as="li">What Broke</ListGroupItem>
	<ListGroupItem as='li'>Oil Changes</ListGroupItem>
	<ListGroupItem as='li'>Bus Fare/Enter here extra stuff</ListGroupItem>
	<ListGroupItem as='li'></ListGroupItem>
</ListGroup>
</section>

{/* <!---------MEDICAL/HEALTH------> */}
<section>
	<h3 className='text-center'>MEDICAL/HEALTH 15%</h3>
<p>This is where you put your RX, Dr, Running, and etc.  You can also put exercise 
	stuff in Other, if you want to seporate med you use on taxes.
You can swich this on and off with the personal if you need to, it is not usuall for me to buy personal stuff every month for example</p>
<ListGroup as="ul"striped bordered hover size='sm' className="table-bordered-success">
	<ListGroupItem as="li"active>RX</ListGroupItem>
	<ListGroupItem as="li" active>Dr</ListGroupItem>
	<ListGroupItem as="li">Health Club Fees</ListGroupItem>
	<ListGroupItem as='li'>Hospital</ListGroupItem>
	<ListGroupItem as='li'>Over the Counter</ListGroupItem>
	<ListGroupItem as='li'>Anything I Missed 1</ListGroupItem>
	<ListGroupItem as="li">Anything I Missed</ListGroupItem>
</ListGroup>

</section>
{/* <!---------OTHER---------------> */}
<section>

	<h3 className='text-center'>OTHER, EXERCISE, GIFTS, & ETC HERE 5-10%</h3>
<p>You can put stuff you do not know where it goes in here.  Feel free to use or not, 100</p>
<ListGroup as="ul"striped bordered hover size='sm' className="table-bordered-success">
	<ListGroupItem as="li"active>Running Shoes</ListGroupItem>
	<ListGroupItem as="li" active>Running Clothes</ListGroupItem>
	<ListGroupItem as="li">Gift</ListGroupItem>
	<ListGroupItem as='li'>Health Club Fees</ListGroupItem>
	<ListGroupItem as='li'>Over the Counter</ListGroupItem>
	<ListGroupItem as='li'>Sewing</ListGroupItem>
	<ListGroupItem as="li">Reading</ListGroupItem>
	<ListGroupItem as="li">I am sure I will pick some new hobby</ListGroupItem>
	<ListGroupItem as="li">Anything I missed 1</ListGroupItem>
	<ListGroupItem as="li">Anything I missed 2</ListGroupItem>
	<ListGroupItem as="li">Anything I missed 3</ListGroupItem>
</ListGroup>
</section>
{/* <!---------OTHER2-------------> */}
<section>
	<h3 className='text-center'>OTHER2, STUFF I MISSED 5-10%</h3>
<p>You can put what I missed here, </p>
<ListGroup>
	<ListGroupItem as="li">Miscellanous/Missed Items</ListGroupItem>
	<ListGroupItem as="li">Miscellanous/Missed Items</ListGroupItem>
	<ListGroupItem as="li">Miscellanous/Missed Items</ListGroupItem>
</ListGroup>
</section>
{/* <!---------LOANS--------------> */}
<section>
	<h3 className='text-center'>LOANS</h3>
<p>You put your loans in here, besides car. Reorganize Percents as needed</p>
<ListGroup>
	<ListGroupItem as="li">LOANS 1</ListGroupItem>
	<ListGroupItem as="li">LOANS 2</ListGroupItem>
	<ListGroupItem as="li">LOANS 3</ListGroupItem>
	<ListGroupItem as='li'>LOANS 4</ListGroupItem>
	
</ListGroup>
</section>  
</div>

</>
		)
}
