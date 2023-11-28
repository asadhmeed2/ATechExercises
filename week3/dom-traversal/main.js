
    const lab = $('#lab');
    const computerIds = [lab]

    const COMPUTER_SELECTOR = '.computer';
    const PROCESSOR_SELECTOR = '.processor';
    const BUS_SELECTOR = '.BUS';
    const GENERATOR_SELECTOR = '.generator';
    const VALIDATOR_SELECTOR = '.validator';
    const MB_SELECTOR = '.MB';
    const QR_SELECTOR = '.QR';

lab.on('click',GENERATOR_SELECTOR, function(){
    const computer = $(this).closest(COMPUTER_SELECTOR)
    const computerId = computer.data().id;
    const processorId = computer.find(PROCESSOR_SELECTOR).attr('id')
    const busNumber = computer.find(BUS_SELECTOR).text()
    
    computerIds.push({com_Id:computerId})
    
    console.log(`Processor ID: ${processorId}`);
    console.log(`Computer’s data-id: ${computerId}`);
    console.log(`BUS: ${busNumber}`);
})

lab.on('click',VALIDATOR_SELECTOR, function(){
    const computer = $(this).closest(COMPUTER_SELECTOR);
    const processor = computer.find(PROCESSOR_SELECTOR);
    const generatorText = processor.find(GENERATOR_SELECTOR).text();
    const mbNumber = computer.find(MB_SELECTOR).text();
    const theQRs = processor.children(QR_SELECTOR);

    console.log('Generator Text :', generatorText);
    console.log('MB number :', mbNumber);

    theQRs.each(function(idx){ 
        console.log( `QR ${idx+1}`,$(this).text())
    })
})
   