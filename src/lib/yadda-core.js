//import the Needed libraries
const Yadda = require('yadda');
var mocha = require('mocha');


//Function to execute all the BDD feature file by using Yadda
function buildYadda(library, framework, featuresPath) {

    //check if we are passing the library Properly 
    if (library === null || library === undefined) {
        throw new Error('step library has not been defined please write some steps');
    }

    //Store the variables for Yadda Execution
    const absoluteFeaturesPath = (featuresPath === undefined) ? 'features' : featuresPath;
    Yadda.plugins.mocha.StepLevelPlugin.init();
    const features = new Yadda.FeatureFileSearch(absoluteFeaturesPath);
    const yadda = Yadda.createInstance(
        library,
        {
            ctx: {},
            GLOBAL: {}
        }
    );

    //Execute the Test Steps Based upon the inputs 
    if (framework.stepLevel) {
        return features.each(function (file) {
            featureFile(file, function (feature) {
                scenarios(feature.scenarios, function (scenario) {
                    steps(scenario.steps, function (step, done) {
                        yadda.run(step, { mocha: this }, done);
                    });
                });
            });
        });
    } else {
        return features.each(function (file) {
            featureFile(file, function (feature) {
                scenarios(feature.scenarios, function (scenario, done) {
                    yadda.run(scenario.steps, { mocha: this }, done);
                });
            });
        });
    }

}

module.exports = buildYadda;





