import * as React from 'react';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Text } from 'app/components/Text';
import { WidgetA } from 'app/Widgets/A';
import { WidgetB } from 'app/Widgets/B';

export function WidgetAAndBPage() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Text>Widget A And B Page</Text>
        <br />
        <Text>Its gonna execute only last click</Text>
        <WidgetA />
        <WidgetA />
        <Text>Will execute every press</Text>
        <WidgetB />
        <WidgetB />
      </PageWrapper>
    </>
  );
}
