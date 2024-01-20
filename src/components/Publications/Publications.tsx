import clsx from "clsx";
import Typography from "../common/Typography";
import {LinkButton} from "../common/LinkButton";

export default function Publications() {
  return (
    <section className="m-2 min-h-screen p-12 md:max-w-full">
      <div>
        <Typography type="h1" className="">
          2023
        </Typography>
      </div>
      <div className="m-2 flex flex-wrap md:flex-nowrap">
        <div className="flex-auto">
          <Typography type="h2" className="">
            Computer-vision-powered Automatic Waste Sorting Bin: a Machine
            Learning-based Solution on Waste Management
          </Typography>
          <Typography type="p" className="">
            The mainstream waste separation methods – recycle bins and manual
            separation – are time consuming, prone to error, and human labor
            intensive. Robots have demonstrated their superior efficiency at
            repetitive task over human’s time to time again. This research
            implements and evaluate a computer-vision-powered Automatic Waste
            Sorting Bin, which is capable to classify the waste types in a short
            time with high efficiency. Controlled and classified using a
            Raspberry pi and a camera, the bin can detect the waste type and
            drop it in the right bin accordingly. The dataset on which the model
            is trained on is relatively small. An image of the waste is first
            captured with the camera, and then analyzed using a YOLOv5 model.
            Parameters that yield the optimal result are 150 epochs with a
            YOLOv5l with an accuracy of 93.33 %. To improve the model’s
            performance, we experimented with different epoch settings and
            measured the results. The setup proposed with this paper provides an
            automated solution to replace the mainstream methods of waste
            separation. This paper provides a low-cost and flexible solution
            that can be easily replicated and trained with a larger dataset to
            acquire a better result. Future research may reference this paper as
            a proof of concept and/or an implementation for a streamlined
            solution.
          </Typography>

          <LinkButton
            className="my-4 justify-end"
            href="https://www.researchgate.net/publication/373029972_Computer-vision-powered_Automatic_Waste_Sorting_Bin_a_Machine_Learning-based_Solution_on_Waste_Management"
            size="lg"
          >
            Link | ResearchGate
          </LinkButton>
        </div>
        <div className={clsx("md:pl-4", "flex-none md:ml-4 md:flex-initial")}>
          <a href="https://www.researchgate.net/publication/373029972_Computer-vision-powered_Automatic_Waste_Sorting_Bin_a_Machine_Learning-based_Solution_on_Waste_Management">
            <img
              src="assets/papers/Computer-vision-powered_Automatic_Waste_Sorting_Bi.jpg"
              className={clsx(
                "2xl:max-w-xl w-fit md:max-w-xl  lg:max-w-xl xl:max-w-xl",
                "inline-block rounded-xl transition-colors",
                "shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]",
                "hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(150,150,150)]"
              )}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
