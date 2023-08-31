import wait from '@/lib/wait';
import { currentUser } from '@clerk/nextjs';

const WelcomeMsg = async ({}) => {
  const user = await currentUser();
  await wait(1000);

  if(!user) {
    return <div>error!</div>
  }

  const username = titleCaseFromSpecialChars(user.username ? user.username : "");

  return (
    <div className='flex w-full mb-12'>
      <h1 className='text-4xl font-bold'>
        Welcome, <br /> {
          user.firstName ? (
            <span>
              {user.firstName} {user.lastName}!
            </span>
          ) : username
        
        }
      </h1>
    </div>
  )
}

export default WelcomeMsg;

function titleCaseFromSpecialChars(inputString : string) {
  // Remove special characters and replace with spaces
  if(inputString != "")
  {
    const stringWithSpaces = inputString.replace(/[^a-zA-Z0-9]+/g, ' ');
    // Capitalize the first letter of each word
    const words = stringWithSpaces.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    // Join the words with spaces
    const titleCaseString = words.join(' ');
    return titleCaseString;
  }
  
  return "";

}