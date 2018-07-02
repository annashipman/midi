  const MIDIOutputs = [],
        MIDIInputs = [];
  
  // Handle incoming MIDI messages
  const handleMIDIMessage = (event) => {
    data = event.data;
    // do more interesting things here!
    console.log(data);
  }
 
  // Cycle through connected controllers and attach incoming MIDI message listener
  const onMIDIInit = (MIDIAcessObject) => {
    // iterate through all the outputs and store in an array
    for (let output of MIDIAcessObject.outputs.values()) {
      console.log(`Found output: ${output.name}`)
      MIDIOutputs.push(output);      
    }
    // iterate through all the inputs and store them in an array
    for (let input of MIDIAcessObject.inputs.values()) {
      console.log(`Found input: ${input.name}`)
      MIDIInputs.push(input);
      // attach an event listener for incoming MIDI messages
      input.onmidimessage = handleMIDIMessage;
    }
  }
  
  // In case things fail...
  onMIDIFail= function(){
    console.log("Could not load MIDI");
  }
  
  // Request access from the browser
  navigator.requestMIDIAccess({}).then( onMIDIInit, onMIDIFail );

  /* 
  When the button is clicked send a MIDI C3 "noteOn" mesage to channel 1 on the first MIDI device stored in our MIDIControllers array
  */
  document.querySelector('#C').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 72, 127]);
  });

 document.querySelector('#C-sh').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 73, 127]);
  });

document.querySelector('#D').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 74, 127]);
  });

document.querySelector('#D-sh').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 75, 127]);
  });

document.querySelector('#E').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 76, 127]);
  });

document.querySelector('#F').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 77, 127]);
  });

document.querySelector('#G').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 79, 127]);
  });

document.querySelector('#A').addEventListener('click', (e) => {
    MIDIOutputs[0].send([144, 81, 127]);
  });
