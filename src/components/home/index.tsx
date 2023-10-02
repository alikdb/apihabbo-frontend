import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container mx-auto px-40 pt-20">
      <div>
        <Heading>HabboAPI's Public APIs</Heading>
        <hr className="my-5" />
        <Text>
          HabboAPI is a free to use API, that aim to help Habbo fansite builders
          create awesome tools and features for their sites. We offer a large
          number of API endpoints, that serve you the lastest badges, furniture,
          clothes and a lot more. No need to be an programming expert. All you
          need is the basic skills and a little flair for detail. The rest is on
          our side - just copy and paste in our code examples, style it to match
          your layout and your are ready!
        </Text>
      </div>
      <div className="mt-10">
        <Heading>What is next?</Heading>
        <hr className="my-5" />
        <Text>
          You are ready! Click yourself over to the first endpoint documentation
          and read what to do next and check our examples.
        </Text>
        <Link
          to="/badges-api"
          className="text-blue-500 hover:underline pt-4 block"
        >
          Go to the documentation
        </Link>
      </div>
    </div>
  );
};

export default Home;
