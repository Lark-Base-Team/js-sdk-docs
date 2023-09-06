# Progress Field

The Progress Field represents a field type that displays a progress bar. It can be used to track the progress of a task or project.

## createCell

```typescript
createCell: (val: number) => Promise<ICell>;
```

Creates a new cell for the Progress Field with the specified value.

## getCell

```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

Gets the cell of the Progress Field for the specified record.

## setValue

```typescript
setValue: (recordOrId: IRecordType | string, val: number) => Promise<boolean>;
```

Sets the value of the Progress Field for the specified record.

## getValue

```typescript
getValue: (recordOrId: IRecordType | string) => Promise<number>;
```

Gets the value of the Progress Field for the specified record.