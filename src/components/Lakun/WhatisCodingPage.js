import React from "react";
import "./WhatIsCodingPage.css";
import kidcode from "./Photo/codekid.png";
import jobforkids from "./Photo/jobforkids.png";
import learningtocode from "./Photo/learningtocode.png";
import blockpytn from "./Photo/blockpython.png";
import projectimage from "./Photo/projectimage.png";
import learntocodeapp from "./Photo/learntocodeapp.png";
import juniorcodingapp from "./Photo/tynkerjuniorapp.png";
import textcoding from "./Photo/text-coding.png";
import codingwithminecraft from "./Photo/codingwithminecraft.png";
import turtle from "./Photo/robot-turtles.png";
import data from "./data.json";

function WhatisCodingPage() {
	return (
		<>
			{data.map(
				({
					codingforkids,
					ultimateguide,
					right1,
					CodingforKids,
					Develope,
					Minecraft,
					MinecrateModding,
					Electronic,
					codingconnectedtoys,
					whatiscoding,
					whatiscodingp1,
					softwareprogramming,
					whatiscoding2,
					whatiscodingp3,
					whatiscodingforkids,
					whatiscodingforkidsp1,
					whatiscodingforkidsp2,
					whatiscodingforkidsp3,
					whyshouldkidslearntocode,
					whyshouldkidslearntocode2,
					whyshouldkidslearntocode3,
					isithardtolearn,
					isithardtolearnp1,
					howToTeachKidsToCode,
					howToTeachKidsToCode2,
					howToTeachKidsToCode3,
					howToTeachKidsToCode4,
					howToTeachKidsToCode5,
					howToTeachKidsToCode6,
					howToTeachKidsToCode7,
					howToTeachKidsToCode8,
					learnToCodeApp,
					learnToCodeApp1,
					learnToCodeApp2,
					learnToCodeApp3,
					learnToCodeApp4,
					learnToCodeOnline,
					learnToCodeOnline1,
					learnToCodeOnline2,
					learnToCodeOnline3,
					learnToCodeOnline4,
					learnToCodeOnline5,
					learnToCodeOnline6,
					learnToCodeOnline7,
					learnToCodeOnline8,
					learnToCodeOnline9,
					learnToCodeOnline10,
					learnToCodeOnline11,
					learnToCodeOnline12,
					learnToCodeOnline13,
					learnToCodeOnline14,
					learnToCodeOnline15,
					learnToCodeOnline16,
					learnToCodeOnline17,
					learnToCodeOnline18,
					learnToCodeOnline19,
					learnToCodeOnline20,
					learnToCodeOnline21,
					learnToCodeOnline22,
					learnToCodeOnline23,
					learnToCodeOnline24,
					learnToCodeOnline25,
					learnToCodeOnline26,
					learnToCodeOnline27,
					learnToCodeOnline28,
					learnToCodeOnline29,
					learnToCodeOnline30
				}) => (
					<div className="whatiscoding">
						<div className="WhatContent">
							<div className="introwhatiscoding">
								<div className="left">
									{/* <h1>Coding for Kids [Updated 2021]</h1> */}
									<h1>{codingforkids}</h1>
									{/* <h3>The Ultimate Guide for Parents in 2021</h3> */}
									<h3>{ultimateguide}</h3>
								</div>

								<div className="right">
									<div className="right1">
										{/* <h3>Coding for Kids</h3> */}
										<h3>{CodingforKids}</h3>
									</div>
									<div className="textup">
										{/* <h3>Develope 21th Century Skills</h3> */}
										<h3> {Develope}</h3>
									</div>
									<div className="textup">
										{/* <h3>Minecraft</h3> */}
										<h3>{Minecraft}</h3>
									</div>
									<div className="textup">
										{/* <h3>Minecrate Modding</h3> */}
										<h3>{MinecrateModding}</h3>
									</div>
									<div className="textup">
										{/* <h3>Electronic Coding Kits</h3> */}
										<h3> {Electronic}</h3>
									</div>
									<div className="textup">
										{/* <h3>Coding Connected Toys</h3> */}
										<h3>{codingconnectedtoys}</h3>
									</div>
								</div>
							</div>
							<div className="whatsStart">
								<div className="codingintrotext">
									{/* <h1>What is coding?</h1> */}
									<h1>{whatiscoding}</h1>
									{/* <p>
										Coding is the method of giving a computer instructions to
										perform a specific task. You may also hear coding referred
										to as
										<i> software programming or computer programming.</i>
									</p> */}
									<p>
										{whatiscodingp1}
										<i>{softwareprogramming}</i>
									</p>
									{/* <p>
										These instructions are communicated using a language that
									computers can understand, like visual blocks, JavaScript,
										Python, and C.
									</p> */}
									<p>{whatiscoding2}</p>
									{/* <p>
									 	Code fuels our world’s technology. From microprocessors in
									 	everyday items like refrigerators and water heaters to
									 	sophisticated programs that operate our cars and buildings,
									 	learning to code has become an essential element of a
									 	child’s education.
									 </p> */}
									<p>{whatiscodingp3}</p>
								</div>
								<div className="image1Holder">
									<img src={kidcode} className="kidCode" />
								</div>
							</div>
							<div>
								<div className="whatiscodingforkids">
									{/* <h1>What is coding for kids?</h1> */}
									<h1>{whatiscodingforkids}</h1>.
									<p>
										{/* Learning to code at a young age is a great opportunity for
										kids and teens to develop their problem-solving and critical
										thinking skills, while building the necessary focus and
										organization to see projects through to completion. */}
										{whatiscodingforkidsp1}
									</p>
									<p>
										{/* With Tynker, coding begins with drag-and-drop visual
										programming in which kids connect blocks together to make
										programs. Visual programming teaches the fundamental
										concepts without typing or syntax by placing the focus on
										the logic behind the code. */}
										{whatiscodingforkidsp2}
									</p>
									<p className="whatiscodingforkids2">
										<img src={jobforkids} />
										<p>
											{/* Once they’ve learned the basics, kids can transition to
											real-world programming languages like Python, JavaScript,
											and C. From online coding courses and games to in-person
											coding instruction and offline learning, there are endless
											coding resources available. The best coding platforms and
											programs make learning fun and engaging, giving kids of
											all ages and experience levels the ability to code. */}
											{whatiscodingforkidsp3}
										</p>
									</p>
								</div>
								<div className="whyshouldkidslearntocode">
									<div className="whyshouldkidslearntocodetext">
										{/* <h1>Why should kids learn to code?</h1> */}
										<h1>{whyshouldkidslearntocode} </h1>
										<p>
											{/* As technology becomes more prevalent in our lives, code is
											revolutionizing every aspect of today’s world – think
											self-driving cars, robot-assisted surgery, social media,
											and more. */}
											{whyshouldkidslearntocode2}
										</p>
										<p>
											{/* Coding is a 21st century skill that motivates kids of all
											ages to become makers of technology while preparing them
											for countless job opportunities. In the meantime, kids who
											code excel at school in math and science, even reading! */}
											{whyshouldkidslearntocode3}
										</p>
									</div>
									<img src={learningtocode} />
								</div>
								<div className="isithardtolearn">
									{/* <h1>Is it hard for kids to learn to code?</h1> */}
									<h1>{isithardtolearn}</h1>
									<div className="hardimgandtext">
										<img src={blockpytn} />
										<p>
											{/* With so many great services available, learning to code
											has never been easier! For example, Scratch and Tynker
											provide innovative visual coding languages that make
											coding fun. At Tynker, Our award-winning platform
											captivates young coders because its story-driven strategy
											motivates them to complete more and more lessons. */}
											{isithardtolearnp1}
										</p>
									</div>
								</div>
								<div className="howtoteachyourkidstocode">
									<h1>
										{/* <h1>How to teach your kids to code</h1> */}
										{howToTeachKidsToCode}
									</h1>
									<p>
										{/* Kids of all ages – from pre-readers to high-schoolers – can
										learn to code. The same fundamental concepts such as
										sequencing, abstraction, repetition, conditional statements,
										loops, and functions can be introduced to kids of any age or
										experience level. */}
										{howToTeachKidsToCode2}
									</p>
									<p>
										{/* The range of coding education solutions spans far and wide!
										There are apps, websites, camps, live online classes, and
										personal tutors, so it’s important to choose the method that
										works best for your child. */}
										{howToTeachKidsToCode3}
									</p>
									<p>
										{/* Websites like Scratch have development environments,
										allowing kids to make amazing creations by learning from the
										community. */}
										{howToTeachKidsToCode4}
									</p>
									<img src={projectimage} />
									<p>
										{/* Kids who’d like more guidance can benefit from the
										structured and scaffolded coding curriculum Those who prefer
										to learn with a tutor can learn to code at an after-school
										program at school, home or a summer camp. */}
										{howToTeachKidsToCode5}
									</p>
									<h1>
										{/* What are the best programming languages for kids? */}
										{howToTeachKidsToCode6}
									</h1>
									<p>
										{/* There are many popular programming languages available to
										kids. Your child can select one based on their age and
										experience level. Visual programming languages are a great
										place to start! We recommend kids begin to learn to code
										with a block coding language like those offered by Tynker
										and Scratch. Once they’ve learned the basics, they can
										transition to text-based coding. */}
										{howToTeachKidsToCode7}
									</p>
									<h1>
										{/* Learn to code apps */} {howToTeachKidsToCode8}
									</h1>
									<p className="learntocodeapp">
										<p>
											{/* These days there’s an app for everything — including
											coding for kids — catering to both pre-readers and older
											kids. Apps offer coding adventures and games to younger
											kids and provide the opportunity for older kids to build
											their own apps and games. */}
											{ }
										</p>
										<img src={learntocodeapp} />
									</p>
									<p>
										<strong>
											{/* Picture-based block coding apps (Ages 5-7) */}
											{learnToCodeApp1}
										</strong>{" "}
										{/* - Play through coding challenges and coding games for kids
										or build simple apps in Tynker Junior and ScratchJr. */}
										{learnToCodeApp2}
									</p>
									<center>
										<img
											src={juniorcodingapp}
											className="picturebasedblockcodingapp"
										/>
									</center>
									<p>
										<strong>
											{/* Text-based block coding apps (Ages 8-11) */}
											{learnToCodeApp3}
										</strong>
										{/* -
										Download Hopscotch or Tynker from the app store and learn to
										code by creating apps, games, and projects with text-based
										coding blocks. */}
										{learnToCodeApp4}
									</p>
									<center>
										<img
											src={textcoding}
											className="picturebasedblockcodingapp"
										/>
									</center>
								</div>
								<div className="learntocodeonline">
									<h1>
										{/* Learn to code online */}
										{learnToCodeOnline}
									</h1>
									<p>
										{/* Enrolling in an online website is an excellent starting
										point for independent learners. We recommend solutions
										focused on making learning to code easy and fun. */}
										{learnToCodeOnline1}
									</p>
									<p>
										<strong>
											{/* Game-based learning */} {learnToCodeOnline2}
										</strong>
										{/* - Game-based platforms
										such as Tynker and the challenges on Code.org motivate kids
										to use code to complete game levels. */}
										{learnToCodeOnline3}
									</p>
									<p>
										<strong>
											{/* Independent learning with Scratch */}
											{learnToCodeOnline4}
										</strong>
										{learnToCodeOnline5}
										{/* - Scratch
										from MIT is a great way of getting started with code.
										Although they don’t have courses, there’s a vibrant
										community to learn from. */}
									</p>
									<p>
										<strong>
											{/* Online courses */}
											{learnToCodeOnline6}
										</strong>
										{learnToCodeOnline7}
										{/* Enroll in a Python or
										JavaScript course on Codecademy or Tynker or learn to code
										with Processing on Khan Academy. */}
									</p>
									<p>
										<strong>
											{/* Build an app */}
											{learnToCodeOnline8}
										</strong>
										{/* Learn to build your own iOS
										app using Swift. Start with these Swift resources and get
										the Swift Playgrounds app by Apple. */}
										{learnToCodeOnline9}
									</p>
									<p>
										<strong>
											{/* Use a book */} {learnToCodeOnline10}
										</strong>
										{/* Learn by following along with
										books like Mission Python, Super Scratch Programming
										Adventure, or Coding with Minecraft. */}
										{learnToCodeOnline11}
									</p>
									<center>
										<img
											src={codingwithminecraft}
											className="picturebasedblockcodingapp"
										/>
									</center>
									<p>
										<strong>
											{/* Code with toys  */} {learnToCodeOnline12}
										</strong>
										{/* You can learn to code with toys such as a Parrot Mambo
										Drone, LEGO Mindstorms, or the Harry Potter Kano Coding Kit. */}

										{learnToCodeOnline13}
									</p>
									<br />
									<br />
									<br />
									<br />
									<h1>
										{/* Where can my child learn to code? */}
										{learnToCodeOnline14}
									</h1>
									<p>
										{/* If you prefer live instruction for your child, explore camp
										and tutoring options. Some schools offer opportunities for
										elementary and middle-schoolers to learn to code through
										in-class instruction or after-school coding classes. */}
										{learnToCodeOnline15}
									</p>
									<p>
										<strong>
											{/* Schools */} {learnToCodeOnline16}
										</strong>
										{/* - Take advantage of your school’s
										coding programs. It’s a great way to get kids involved in
										computer science and STEM at a young age. */}
										{learnToCodeOnline17}
									</p>
									<p>
										<strong>
											{/* Tutoring Centers */} {learnToCodeOnline18}
										</strong>
										{/* - Enroll your child in an
										after-school coding class at your school or nearest CodeLab
										learning center. */}
										{learnToCodeOnline19}
									</p>
									<p>
										<strong>
											{/* Camps */} {learnToCodeOnline20}
										</strong>
										{/* - Participate in a summer camp such
										as CodeLab, SheCodes, or TeensCanCode. */}
										{learnToCodeOnline21}
									</p>
									<p>
										<strong>
											{/* Tutoring Services */}
											{learnToCodeOnline22}
										</strong>
										{learnToCodeOnline23}
										{/* Hire a personal tutor
										from services such as BigTech, FaradTech or CodeLab. */}
									</p>
									<br />
									<br />
									<br />
									<br />
									<h1>
										{/* What offline resources can help my child learn to code? */}
										{learnToCodeOnline24}
									</h1>
									<p>
										{/* Kids can learn computing concepts without a computer or
										tablet. Hands-on activities using crayons, playing cards,
										and board games are excellent options to teach coding to
										kids. */}
										{learnToCodeOnline25}
									</p>
									<p>
										<strong>
											{/* Unplugged learning */} {learnToCodeOnline26}
										</strong>
										{/* - Activities found via
										CS Unplugged teach kids computing concepts offline. */}
										{learnToCodeOnline27}
									</p>
									<p>
										<strong>
											{/* Board games */}
											{learnToCodeOnline28}
										</strong>
										{/* - Preschoolers can learn to code
										using fun board games such as Robot Turtles! */}
										{learnToCodeOnline29}
									</p>
									<center>
										<img src={turtle} className="picturebasedblockcodingapp" />
									</center>
									<br />
									<br />
									<br />
									<br />
									<p>
										{/* Learning to code has endless benefits! From preparing kids
										for future job opportunities to developing their soft skills
										and academic skills, there are many reasons for kids to
										learn how to code. And, thanks to the growing awareness of
										the importance of learning to code, kids have plenty of
										options to choose from. Just find the best solution for your
										child and get them coding! */}
										{learnToCodeOnline30}
									</p>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</>
	);
}

export default WhatisCodingPage;
