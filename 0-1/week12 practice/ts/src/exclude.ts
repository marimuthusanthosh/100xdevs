type EventType = 'click' | 'hover' | 'keypress';
type ExcludeEvent = Exclude<EventType, 'keypress'>;

const handleEvent =(event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // Valid
handleEvent('hover'); // Valid