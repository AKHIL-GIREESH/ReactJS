const Alexa = require("ask-sdk-core");

const randomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max-min) + min)

const verifyOption = (list) => {
    console.log(list)
    let ranString = String.fromCharCode(randomNumber(122,97))
    if(list.includes(ranString)){
        console.log("Works")
        return verifyOption(list)
    }else{
        return ranString
    }
}

class findAnimal {
    constructor(){
        this.optionsArray = []
        this.mocksArray = ["Cat","Apple","Orange","Chocolate","Elephant"]
        this.item = this.mocksArray[randomNumber(5)]
        this.answer = this.item[randomNumber(this.item.length)]
        this.notItem = this.item.replace(this.answer,"_")
    }

    question(){
        console.log(`Guess the missing letter in ${this.notItem}?`)
    }

    generateOptions(){
        this.optionsArray.push(this.answer)
        console.log(this.optionsArray)
        for(let i=0;i<3;i++){
            this.optionsArray.push(verifyOption(this.optionsArray))
        }
        console.log(this.optionsArray)
        this.optionsArray.shift()
        this.optionsArray.splice(randomNumber(4),0,this.answer)
        console.log(this.optionsArray)
    }

    getParams() {
        this.generateOptions();
        return {
          item: this.item,
          answer: this.answer,
          notItem: this.notItem,
          optionsArray: this.optionsArray,
        };
      }
}

let answerr;

const DOCUMENT_ID = "MCQ";

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
  return {
    type: "Alexa.Presentation.APL.RenderDocument",
    token: tokenId,
    document: {
      type: "Link",
      src: "doc://alexa/apl/documents/" + aplDocumentId
    },
    datasources: dataSources
  }
};

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = `Hello! Let's start guessing random words. Are you ready?`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("Are you ready to begin guessing random words?")
      .getResponse();
  },
};

const Randomhandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'Randomhandler'
    );
  },
  handle(handlerInput) {
    const newQ = new findAnimal();
    const question = newQ.notItem;
    answerr = newQ.answer;
    const options = newQ.generateOptions();

    const datasource = {
      multipleChoiceTemplateData: {
        type: "object",
        properties: {
          backgroundImage: "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
          titleText: "Math Question",
          primaryText: question,
          choices: options[1],
          choiceListType: "alphabet",
          headerAttributionImage: "",
        },
      },
    };

    const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);

    handlerInput.responseBuilder.addDirective(aplDirective);

    console.log('~~~~~~~~~~~~ Mathhandler ~~~~~~~~~~~~');
    const speakOutput = `Here's your math question: ${question}. Your options are ${options[1].join(', ')}.`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('Please choose the correct answer.')
      .getResponse();
  },
};

const AnswerIntent = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'Randomhandler'
    );
  },
  handle(handlerInput) {
    const slots = handlerInput.requestEnvelope.request.intent.slots;
    const number = slots['answer'].value;
    const userAnswer = parseInt(number, 10);

    let speakOutput;

    if (userAnswer === answerr) {
      speakOutput = 'Correct answer! Great job!';
    } else {
      speakOutput = `Oops! Incorrect answer. The correct answer was ${answerr}.`;
    }

    const newQ = new findAnimal();
    const question = newQ.notItem;
    answerr = newQ.answer;
    const options = newQ.generateOptions();

    const datasource = {
      multipleChoiceTemplateData: {
        type: "object",
        properties: {
          backgroundImage: "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
          titleText: "Math Question",
          primaryText: question,
          choices: options[1],
          choiceListType: "alphabet",
          headerAttributionImage: "",
        },
      },
    };

    const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);

    handlerInput.responseBuilder.addDirective(aplDirective);

    console.log('~~~~~~~~~~~~ Mathhandler ~~~~~~~~~~~~');
    const nextQuestionOutput = `Here's your next math question: ${question}. Your options are ${options[1].join(', ')}.`;

    return handlerInput.responseBuilder
      .speak(`${speakOutput} ${nextQuestionOutput}`)
      .reprompt('Please choose the correct answer.')
      .getResponse();
  },
};





const NoHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
        Alexa.getIntentName(handlerInput.requestEnvelope)==='NoHandler';
  },
  handle(handlerInput) {
    const speakOutput = 'I am not sure I Understand. Please say Start to start math quiz and Stop to quit the skill';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("Hello?")
      .getResponse();
  },
};





const StopIntent = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent') ||
        Alexa.getIntentName(handlerInput.requestEnvelope)==='StopIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Thank you for playing. Goodbye!';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .withShouldEndSession(true)  // Add this line to explicitly end the session
      .getResponse();
  },
};


const HelpIntent = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
    );
  },
  handle(handlerInput) {
    const speakOutput = 'This is a math quiz skill. I will ask you math questions and provide multiple-choice options. You need to choose the correct answer. Are you ready to begin the quiz?';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("Are you ready to begin the math quiz?")
      .getResponse();
  },
};


const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error){
    const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
    console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    Randomhandler,
    AnswerIntent,
    StopIntent,
    NoHandler,
    HelpIntent
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();

