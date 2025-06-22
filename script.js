console.log('Welcome to the Motivational Message generator!');

// Storing parts of message in separate arrays
const partOne = ['When you need to do something difficult, ', 'If you don\'t think you can do something, ', 'If you have an important project to complete, ', 'If you think you aren\'t prepared, ', 'When a goal seems unattainable, '];
const partTwo = ['don\'t be afraid to ask for help. ', 'don\'t procrastinate. ', 'don\'t allow mistakes to get you down. ', 'remember that everyone struggles at times. ', 'dig deep, and remember why you\'re doing this. '];
const partThree = ['You can do whatever you put your mind to.', 'Overcoming challenges will only make you better.', 'It feels amazing to accomplish your goals.', 'No challenge is too big for you.', 'You\'ve already worked so hard. Keep pushing.'];

// Create function to generate message. Function is not necessary for this functionality, but I decided to get practice creating functions
const generateMessage = () => {
    // Select random message components from component arrays
    const componentOne = partOne[Math.floor(Math.random() * 5)];
    const componentTwo = partTwo[Math.floor(Math.random() * 5)];
    const componentThree = partThree[Math.floor(Math.random() * 5)];

    console.log('Today\'s message:');
    // Put message together in single console.log
    console.log(componentOne + componentTwo + componentThree);
}

// Call generateMessage() to generate a message to the console
generateMessage();