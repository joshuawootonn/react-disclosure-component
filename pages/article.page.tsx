import Final from "components/article/final";
import Step1 from "components/article/step1";
import Step2 from "components/article/step2";

export default function Test() {
  return (
    <div className="flex flex-col space-y-12 mx-auto w-[800px]">
      <div>Final</div>
      <Final />
      <div>STep 1</div>
      <Step1 />
      <div>step 2</div>
      <Step2 />
    </div>
  );
}
