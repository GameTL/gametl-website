import LinkButton from "../common/LinkButton";
import Typography from "../common/Typography";

const Introduction = () => {
  return (
    <section className="relative mx-auto gap-16 sm:mx-16  md:mx-24 md:grid xl:mx-40 ">
      <div className="relative z-10 flex flex-col items-start justify-start py-8">
        <div>
          <Typography
            type="h1"
            className="font-display text-accentColor md:text-8xl"
          >
            Tinapat Limsila
          </Typography>
          <Typography
            type="h1"
            className="font-display text-accentColor md:text-8xl"
          >
            Portfolio
          </Typography>
          <Typography type="p" className="my-4 text-sm md:text-xl">
            {"Robotics and Artificial Intelligence Engineer from Chulalongkorn \
            University."}
          </Typography>
        </div>

        <LinkButton href="/projects" size="lg" className="my-10">
          Know me for my work | Projects
        </LinkButton>
      </div>
    </section>
  );
};

export default Introduction;
