import * as React from 'react';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Text } from 'app/components/Text';

export function HomePage() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Text>This is home with 0 widgets</Text>
        <br />
        <Text>So question is how we test this right?</Text>
        <Text>Really simple</Text>
        <Text>
          Visiting first page `Only widget A` gives u idea of what that widget
          does
        </Text>
        <br />
        <Text>
          By visiting page `Widget A and B`, its gonna gives u example
        </Text>
        <Text>
          where developer/user chose multiple `same` widgets across single
          page/app
        </Text>
        <Text>
          In cases like this, u have two options, A mount with DEFAULT mode
          (DAEMON)
        </Text>
        <Text>
          or use COUNTER when u wanna eject saga after that widget is no longer
          active
        </Text>
        <Text>
          This is good to use when u build Widget system with redux saga, etc...
        </Text>

        <br />
        <Text>To test this code, and its difference</Text>
        <Text>run this code, go to `Widget A and B` page</Text>
        <Text>
          press increment [+1] or [+2] buttons and see what happens to the
          counter value
        </Text>
        <Text>
          This "lag/delay" is here to represent what if u call service or
          something similar (many many times)
        </Text>
        <br />
        <Text>SOLUTION: change the branch from `master` to `counter`</Text>
        <Text>
          For more details, just check out master/counter diff on github
        </Text>
      </PageWrapper>
    </>
  );
}
