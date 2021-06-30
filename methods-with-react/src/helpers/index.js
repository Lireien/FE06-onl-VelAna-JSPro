export const listFilter = type => i => i.type === type;

export const changeItemTypeByName = (list, name, type ) => {
    const newList = [...list];
    const elementIndex = newList.findIndex((i) => i.name === name);
    newList[elementIndex] = { ...newList[elementIndex], type };
    return newList;
};