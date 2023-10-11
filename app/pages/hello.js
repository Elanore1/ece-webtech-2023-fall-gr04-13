// pages/[name]/index.js

import { useRouter } from 'next/router';
import Layout from '../components/Layout.js';

function NamePage() {
  const router = useRouter();
  const { name } = router.query;

  // You can customize the content based on the 'name' parameter
  const content = getContentForName(name);

  return (
    <Layout>
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
    </Layout>
 
  );
}


function getContentForName(name) {
    switch (name) {
      case 'John':
        return {
          title: 'Hello, John!',
          description: 'This is the page for John.',
        };
      case 'Elanore':
        return {
          title: 'Elanore\'s Page',
          description: 'Hello Guys, I am Elanore Lelievre, a 4th year student at the ECE school. I am 20 and I love node.js.',
        };
      case 'Noe':
        return {
          title: 'Noe\'s Page',
          description: 'Hello, my name is Noe. I am 20 years old, and I like playing video games and watching movies!',
        };
      // Add cases for other names
      default:
        return {
          title: 'Not Found',
          description: 'This name is not recognized.',
        };
    }
  }
  
export default NamePage;
