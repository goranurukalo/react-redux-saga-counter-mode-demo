import * as React from 'react';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Text } from 'app/components/Text';
import { WidgetA } from 'app/Widgets/A';

export function WidgetAPage() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Text>Widget A</Text>
        <WidgetA />
      </PageWrapper>
    </>
  );
}
