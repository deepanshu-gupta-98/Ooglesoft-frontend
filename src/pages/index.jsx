import { Wrapper } from "../layout";
import HomeMain from '../components/homes/home';
import SEO from "../components/seo";

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Home four'} />
      <HomeMain />
    </Wrapper>
  )
}
