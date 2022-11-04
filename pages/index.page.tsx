import {
  Animated,
  AnimatedWithKeyframes,
  AnimatedWithLayout,
  AnimatedWithLayoutWithoutGlitch,
  AnimatedWithStagger,
  AnimateWithGoodTransition,
  AnimateWithGoodTransitionAndAccessibility,
  NoAnimation,
} from "components";

export default function App() {
  return (
    <div className="prose w-full space-y-12 mx-auto my-10">
      <h1>Intro</h1>
      <p>
        What the heck is the page? Well fellow traveler, I embarked on a quest
        for how to animate height and it has taken me many places. This is my
        log of what I have tried and what the best answer is at the moment
      </p>
      <p>
        More insights from this journey are{" "}
        <a
          className="text-purple"
          href="https://www.joshuawootonn.com/react-disclosure-component"
        >
          here
        </a>{" "}
        and the github for this code is{" "}
        <a
          className="text-purple"
          href="https://github.com/joshuawootonn/react-disclosure-component"
        >
          here
        </a>
      </p>
      <p>
        For the sake of example I have chosen an disclosure component to test
        out different solutions on. You will find it below
      </p>
      <h2>No animation</h2>
      <p>
        boring... :) but works — this is the base component that will be used on
        the rest of the animations{" "}
      </p>
      <NoAnimation />
      <br />
      <br />
      <br />
      <br />
      <h2>Animation with text being cut off</h2>
      <p>
        {" "}
        Framer Motion allows you to animate props from <code>0</code> to{" "}
        <code>auto</code>. This is pretty dope and the simplest way of
        animating. Unfortunately this actually animating <code>height</code> in
        css so watch the perf on this.
      </p>
      <p>
        (If you want a transform based option scroll down to the layout options)
      </p>
      <pre>
        <code>
          {`<AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
      key="test"
      className="text-lg font-light"
    >
      {props.description}
    </motion.div>
  )}
</AnimatePresence>`}
        </code>
      </pre>
      <Animated />
      <br />
      <br />
      <br />
      <br />
      <h2>Animation with good transitions </h2>
      <p>
        My only gripe the above animation is that the text is cut off by the
        changing height. This is because text size doesn&apos;t shrink based on
        the height of the element changing. It&apos;s size is determined by the{" "}
        <code>font-size</code> prop, so it just overflows. In our case, this
        looks bad. I originally solved this with a bunch of big brain ways, but
        I recently found that Sam Selikoff had a solution that was really
        simple.
        <a
          className="ml-4 text-purple"
          href="https://www.youtube.com/watch?v=IfAv4NSv-nA"
        >
          source
        </a>
      </p>
      <pre>
        <code>
          {`transition={{
  height: {
    duration: 0.4,
  },
  opacity: {
    duration: 0.3,
  },
}}`}
        </code>
      </pre>
      <p>
        Just animate the properties so that the opacity changes sooner than the
        height. Brilliant!
      </p>
      <AnimateWithGoodTransition />
      <br />
      <br />
      <br />
      <hr />
      <h2>
        Animation w/ good transitions and the{" "}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/">
          disclosure pattern
        </a>
        <br />
        <span className="text-blue">(Best Current Solution)</span>
      </h2>
      <p>
        I got some more feedback and update the article to reflect the
        accessibility upgrade
      </p>
      <AnimateWithGoodTransitionAndAccessibility />
      <br />
      <br />
      <br />
      <hr />
      <h1>Layout API</h1>
      For this specific component a layout animation isn&apos;t optimal because
      it is generally used in a marketing page with content following it. Unless
      you make your entire page motion elements with the `layout` prop then your
      following content will jump around. But it is cool to see the simplicity
      of this approach so that is why I am including it here at the end.
      <h2>Using Layout</h2>
      <AnimatedWithLayout />
      <br />
      <br />
      <br />
      <br />
      <h2>Using Layout (Without border radius glitch)</h2>
      You might notice in the last example the corners kinda _twitch_ on
      animation. Framer Motion can fix this if we set the `borderRadius` as a
      motion value.
      <AnimatedWithLayoutWithoutGlitch />
      <br />
      <a
        className="mt-16 text-purple"
        href="https://www.framer.com/docs/layout-animations/##scale-correction"
      >
        More info here!
      </a>
      <br />
      <br />
      <br />
      <hr />
      <h1>Other stuff I have tried 💀</h1>
      <p>
        From here on you are entering the graveyard of what I have tried.
        Proceed if you must.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h2>Animation by staggering variants</h2>
      <p>ok, just sucks that there is a _delay_ on the exit</p>
      <AnimatedWithStagger />
      <br />
      <br />
      <br />
      <br />
      <h2>Animation by staggering variants</h2>
      <p>
        me trying to animate height from <code>0</code> to <code>auto</code>{" "}
        with keyframes <span className="text-red-500">(this throws)</span>
      </p>
      <AnimatedWithKeyframes />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
