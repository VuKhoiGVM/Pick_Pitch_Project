import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
export const PostList = props => (
    <List filters={postFilters}>
       <Datagrid>
           <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
           <EditButton />
        </Datagrid>
    </List>
  );
  
  export const PostEdit = () => (
      <Edit>
          <SimpleForm>
              <ReferenceInput source="userId" reference="users">
                  <SelectInput optionText="id" />
              </ReferenceInput>
              <TextInput source="id" />
              <TextInput source="title" />
              <TextInput source="body" />
          </SimpleForm>
      </Edit>
  );

  export const PostCreate = props => (
       <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    );