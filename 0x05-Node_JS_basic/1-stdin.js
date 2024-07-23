function stdin_() {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    if (data === 'EOF') {
      console.log('his important software is now closing\n');
    }
    process.stdin.on('end', () => {
      console.log('This important software is now closing\n');
      process.exit();
    });
    process.on('SIGINT', () => {
      console.log('This important software is now closing\n');
      process.exit();
    });
  });
}

stdin_();

module.exports = stdin_;
