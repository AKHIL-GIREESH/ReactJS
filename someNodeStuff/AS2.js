const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "imageDisplay";

const datasource = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/detail/DetailListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Plant Stores",
        "subtitle": "Seattle",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/detail/DetailListPhoto.png",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Peonies & Petals Nursery"
            },
            "rating": {
                "number": 4.5,
                "text": "248"
            },
            "locationText": {
                "type": "PlainText",
                "text": "1646 Hillcrest Street<br />Seattle, WA<br />(253) 387-0290"
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "Today 9:00 AM - 4:00 PM<br />$$   Nurseries, Gardening, Home Goods<br />1.2 mi"
            }
        },
        "buttons": [
            {
                "text": "Call"
            },
            {
                "text": "Direction"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
    }
};

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

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();

// const Alexa = require('ask-sdk-core');
// const Util = require('./util.js');

const animalArray = ["cat", "apple", "orange", "chocolate", "elephant"]; // Define the animal names array


const randomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min);
const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const verifyOption = (list) => {
  let ran = randomNumber(122, 97);
    let ranString = alphabetArray[randomNumber(26)]
    if(list.includes(ranString)){
        return verifyOption(list)
    }else{
        return ranString
    }
};

class FindAnimal {
  constructor() {
    this.optionsArray = [];
    this.mocksArray = ["ant", "apple", "balloon", "banana", "bear","bed","beetroot","boat","camel","car","cat","chair","cow","crown","cycle","deer","dog","donkey","door","duck","eagle","ear","earth","egg","fan","fish","flashlight","frog","grapes","hat","horse","key","lion","mango","mat","moon","onion","orange","owl","pear","pen","penguin","pig","pigeon","pineapple","potato","rabbit","ring","sheep","star","strawberry","table","teeth","tiger","tomato","tree","umbrella","watermelon","window","zebra"];
    this.item = this.mocksArray[randomNumber(this.mocksArray.length)];
    this.answer = this.item[randomNumber(this.item.length)];
    this.notItem = this.item.replace(this.answer, "_");
  }

  generateOptions() {
    this.optionsArray.push(this.answer)
    for (let i = 0; i < 3; i++) {
      this.optionsArray.push(verifyOption(this.optionsArray));
    }
    this.optionsArray.shift()
    this.optionsArray.splice(randomNumber(4),0,this.answer)
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

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Hey! Let us guess some words. Ready?';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const RandomIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'RandomIntent'
    );
  },
  handle(handlerInput) {
    const quest = new FindAnimal();
    const { item, answer, notItem, optionsArray } = quest.getParams();
    answerr=answer;

    const speakOutput = `Guess the missing letter  ${notItem},the options are ${optionsArray.join(', ')}.`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('Please choose the correct answer.')
      .getResponse();
  },
};

const AnswerIntentHandler={
    canHandle(handlerInput){
        return(
            Alexa.getRequestType(handlerInput.requestEnvelope)==='IntentRequest' && 
            Alexa.getIntentName(handlerInput.requestEnvelope)==='AnswerIntent'
            ); 
        
    },
    handle(handlerInput){
            
                // const quest = new FindAnimal();
                // const {  answer } = quest.getParams();
                const slots = handlerInput.requestEnvelope.request.intent.slots;
                const inpAns = slots['answer'].value;
                
                let speakOutput;
                
                console.log(inpAns)
                console.log(answerr)
                console.log(inpAns === answerr)

                if(inpAns === answerr ){
                    speakOutput="Correct Answer";
                }
                else{
                    speakOutput= `Wrong answer. The correct answer was ${answerr}.`;
                }
                
                const quest = new FindAnimal();
                const { item, answer, notItem, optionsArray } = quest.getParams();
                answerr=answer;
                
                const datasource = {
                  multipleChoiceTemplateData: {
                    type: "object",
                    properties: {
                      backgroundImage: "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                      titleText: "Question",
                      primaryText: notItem,
                      choices: optionsArray,
                      choiceListType: "alphabet",
                      headerAttributionImage: "",
                    },
                  },
                };

    const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);

    handlerInput.responseBuilder.addDirective(aplDirective);

                //const speakOutput = `Guess the missing letter  ${notItem},the options are ${optionsArray.join(', ')}.`;
                const nextQuestionOutput = `Here's your next question: Guess the missing letter in ${notItem}. Your options are ${optionsArray.join(', ')}.`;
                
                return handlerInput.responseBuilder
      .speak(`${speakOutput} ${nextQuestionOutput}`)
      .reprompt('Please choose the correct answer.')
      .getResponse();              
    },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelpIntent')
    );
  },
  handle(handlerInput) {
    const speakOutput = 'You can say hello to me! How can I help?';

    return handlerInput.responseBuilder.speak(speakOutput).reprompt(speakOutput).getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Goodbye!';

    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};

const FallbackIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent'
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

    return handlerInput.responseBuilder.speak(speakOutput).reprompt(speakOutput).getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

// const IntentReflectorHandler = {
//   canHandle(handlerInput) {
//     return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
//   },
//   handle(handlerInput) {
//     const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
//     const speakOutput = `You just triggered ${intentName}`;

//     return handlerInput.responseBuilder.speak(speakOutput).getResponse();
//   },
// };

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
    console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

    return handlerInput.responseBuilder.speak(speakOutput).reprompt(speakOutput).getResponse();
  },
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    RandomIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    FallbackIntentHandler,
    SessionEndedRequestHandler,
    AnswerIntentHandler
    // IntentReflectorHandler
  )
  .addErrorHandlers(ErrorHandler)
  .withCustomUserAgent('sample/hello-world/v1.2')
  .lambda();
