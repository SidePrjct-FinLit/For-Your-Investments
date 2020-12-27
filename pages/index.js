import React from "react";

function App() {
  return <Frame1 {...Frame1Data} />;
}

export default App;


function Frame1(props) {
  const {
    background,
    link313,
    text317,
    group23,
    line1,
    password324,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    divider,
    divider2,
    or337,
    rectangle41,
    group12,
    password357,
    email359,
    subtitle360,
    title361,
    vector,
    vector2,
    vector3,
    vector4,
    signUpWithGoogle370,
    signUpWithFacebook374,
    vector5,
    vector6,
    xmlid1,
    x2020ForYourInvestments328,
    termsOfService330,
    privacyPolicy331,
    x332,
    shutterstock1444894232Converted031,
    subtitle379,
    bridgeTheKnowledgeGapBetweenSavingA,
    subtitle382,
    makeInformedFinancialDecisions383,
    tree031,
    choice051,
    subtitle386,
    chooseALearningPathThatSuitsYourNee,
    readyToGetStarted390,
    text394,
    fyinvestments,
    inputGroupProps,
    inputGroup2Props,
  } = props;

  return (
    <div className="frame-1">
      <div className="overlap-group-C61RwL">
        <div className="rectangle-29"></div>
        <img className="background-4eduM0" src={background} />
        <div className="link-313 valign-text-middle roboto-regular-normal-black-18px border-class-1">{link313}</div>
        <div className="background-BJQsbv border-class-3"></div>
        <div className="text-317 valign-text-middle roboto-medium-fern-18px border-class-1">{text317}</div>
        <img className="group-23" src={group23} />
        <img className="line-1" src={line1} />
        <div className="password-324 valign-text-middle inter-bold-black-pearl-12px border-class-1">{password324}</div>
        <p className="by-signing-itions-333 valign-text-middle inter-normal-onyx-14px border-class-1">
          <span>
            <span className="span1-x06ExZ">{spanText}</span>
            <span className="span2-x06ExZ">{spanText2}</span>
            <span className="span3-x06ExZ">{spanText3}</span>
            <span className="span4-x06ExZ">{spanText4}</span>
            <span className="span5-x06ExZ">{spanText5}</span>
          </span>
        </p>
        <img className="divider-4eduM0" src={divider} />
        <img className="divider-BJQsbv" src={divider2} />
        <div className="or-337 valign-text-bottom inter-bold-san-juan-14px border-class-1">{or337}</div>
        <img className="rectangle-41" src={rectangle41} />
        <img className="group-12" src={group12} />
        <InputGroup {...inputGroupProps} />
        <InputGroup {...inputGroup2Props} className="input-group-BJQsbv" />
        <div className="password-357 valign-text-middle inter-bold-black-pearl-12px border-class-1">{password357}</div>
        <div className="email-359 valign-text-middle inter-bold-black-pearl-12px border-class-1">{email359}</div>
        <div className="subtitle-360 avenir-roman-normal-black-24px border-class-1">{subtitle360}</div>
        <h1 className="title-361 valign-text-middle border-class-1">{title361}</h1>
        <div className="rectangle-35"></div>
        <img className="vector-4eduM0" src={vector} />
        <img className="vector-BJQsbv" src={vector2} />
        <img className="vector-6sb1qn" src={vector3} />
        <img className="vector-ovOecM" src={vector4} />
        <div className="sign-up-wi-google-370 valign-text-middle roboto-bold-eerie-black-14px border-class-1">
          {signUpWithGoogle370}
        </div>
        <div className="rectangle-36"></div>
        <div className="sign-up-wi-cebook-374 valign-text-middle roboto-bold-eerie-black-14px border-class-1">
          {signUpWithFacebook374}
        </div>
        <img className="vector-wPpLiT" src={vector5} />
        <img className="vector-hbmWG9" src={vector6} />
        <img className="xmlid-1" src={xmlid1} />
      </div>
      <div className="overlap-group1-C61RwL">
        <div className="rectangle-37"></div>
        <div className="fyi-footer">
          <div className="x2020-for-y-tments-328">{x2020ForYourInvestments328}</div>
          <div className="overlap-group2">
            <div className="terms-of-service-330 raleway-medium-black-24px">{termsOfService330}</div>
            <div className="privacy-policy-331 raleway-medium-black-24px">{privacyPolicy331}</div>
            <div className="x-332 raleway-medium-black-24px">{x332}</div>
          </div>
        </div>
        <img className="shuttersto-erted-03-1" src={shutterstock1444894232Converted031} />
        <div className="subtitle-379 avenir-roman-normal-black-24px border-class-1">{subtitle379}</div>
        <div className="bridge-the-esting-380 avenir-black-black-36px border-class-1">
          {bridgeTheKnowledgeGapBetweenSavingA}
        </div>
        <div className="subtitle-382 avenir-roman-normal-black-24px border-class-1">{subtitle382}</div>
        <div className="make-infor-isions-383 avenir-black-black-36px border-class-1">
          {makeInformedFinancialDecisions383}
        </div>
        <img className="tree-03-1" src={tree031} />
        <img className="choice-05-1" src={choice051} />
        <div className="subtitle-386 avenir-roman-normal-black-24px border-class-1">{subtitle386}</div>
        <div className="choose-a-l--needs-387 avenir-black-black-36px border-class-1">
          {chooseALearningPathThatSuitsYourNee}
        </div>
        <div className="rectangle-40"></div>
        <div className="ready-to-g-tarted-390 border-class-1">{readyToGetStarted390}</div>
        <div className="background-RH0WJ5"></div>
        <div className="text-394 valign-text-middle border-class-1">{text394}</div>
        <img className="fyinvestments" src={fyinvestments} />
        <div className="rectangle-33"></div>
      </div>
    </div>
  );
}


function InputGroup(props) {
  const { typeYourEmail346, className } = props;

  return (
    <div className={`input-group-4eduM0 ${className || ""}`}>
      <div className="input-regu-ar-default-txxqoN border-class-2">
        <div className="type-your-email-346 valign-text-middle inter-regular-normal-lynch-14px border-class-1">
          {typeYourEmail346}
        </div>
      </div>
    </div>
  );
}
const inputGroupData = {
    typeYourEmail346: "Type your email",
};

const inputGroup2Data = {
    typeYourEmail346: "Type your password",
};

const Frame1Data = {
    background: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/background@1x.png",
    link313: "Courses",
    text317: "Login",
    group23: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/group-23@1x.jpg",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/line-1@1x.svg",
    password324: "Password",
    spanText: "By signing up, you agree to FYI’s ",
    spanText2: "Terms",
    spanText3: " and ",
    spanText4: "Conditions",
    spanText5: ".",
    divider: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/divider@2x.svg",
    divider2: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/divider@2x.svg",
    or337: "OR",
    rectangle41: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/rectangle-41@1x.svg",
    group12: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/group-12@1x.png",
    password357: "Password",
    email359: "Email",
    subtitle360: "Millions of Americans want to invest their money but have no idea where to begin. Fortunately, you’ve made it to the starting line.",
    title361: <>It’s time to learn<br/>how to invest.</>,
    vector: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/vector@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/vector-1@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/vector-2@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/vector-3@2x.svg",
    signUpWithGoogle370: "Sign up with Google",
    signUpWithFacebook374: "Sign up with Facebook",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/vector-4@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/vector-5@2x.svg",
    xmlid1: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/xmlid-1@1x.jpg",
    x2020ForYourInvestments328: "© 2020 For Your Investments",
    termsOfService330: "Terms of Service",
    privacyPolicy331: "Privacy Policy",
    x332: "|",
    shutterstock1444894232Converted031: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/shutterstock-1444894232--converted--03-1@1x.jpg",
    subtitle379: "Want to invest but don’t know where to begin?  The answer is to take a step back and build a solid  foundation before leaping forward.  As your trusted learning partner, we will help guide your step in the right direction.",
    bridgeTheKnowledgeGapBetweenSavingA: "Bridge the knowledge gap between saving and investing",
    subtitle382: "The first step in making a solid decision is to have all the available information. We will provide you with high quality content on the most relevant and important investment topics.",
    makeInformedFinancialDecisions383: "Make informed financial decisions",
    tree031: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/tree-03-1@1x.jpg",
    choice051: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/choice-05-1@1x.jpg",
    subtitle386: "A quick internet search of ‘ways to invest money’ will undoubtedly lead to massive overwhelm.  We’ve curated the most important pieces of information you need to learn and deliver in a variety of ways.  Whether you learn best by reading, listening, or watching...we’ve got you covered.",
    chooseALearningPathThatSuitsYourNee: "Choose a learning path that suits your needs",
    readyToGetStarted390: "Ready to get started?",
    text394: "Sign Up",
    fyinvestments: "https://anima-uploads.s3.amazonaws.com/projects/5fe7cc8da2cb7189de1943b1/releases/5fe7cd22c99bb205181d7c65/img/fyinvestments@2x.svg",
    inputGroupProps: inputGroupData,
    inputGroup2Props: inputGroup2Data,
};

