export interface EditorProps {
    onChange: (code: string) => void;
    theme: string;
    code: string;
}