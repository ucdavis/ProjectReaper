import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Row, Separator } from '../components/Row';
import { TimeSheetsScreenProps } from './TimeSheetsScreen';

type TimeSheetsListProps = TimeSheetsScreenProps;

export default function TimeSheetsList(props: TimeSheetsListProps) {
  const { navigation, route } = props;
  const { timeSheets } = route.params;

  return (
    <FlatList
      data={timeSheets}
      keyExtractor={item => {
        return `${item.id}`;
      }}
      renderItem={({ item }) => {
        const projectName = item.project.name;
        const projectDescription = item.project.description;

        return (
          <Row
            /*image={{ uri: item.picture.thumbnail }}*/
            title={projectName}
            subtitle={projectDescription}
            onPress={() => navigation.navigate('TimeSheetDetails', { timeSheet: item })}
          />
        );
      }}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <Separator />}
      ListFooterComponent={() => <Separator />}
      contentContainerStyle={{ paddingVertical: 20 }}
    />
  );
};
