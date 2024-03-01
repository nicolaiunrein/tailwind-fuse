use super::*;

#[derive(Clone, Debug)]
pub struct TailwindAccentColor {
    color: TailwindColor,
}

crate::macros::color_instance!(TailwindAccentColor);

impl Display for TailwindAccentColor {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "accent-{}", self.color)
    }
}

impl TailwindInstance for TailwindAccentColor {
    fn collision_id(&self) -> String {
        "accent-color".into()
    }

    fn get_collisions(&self) -> Vec<&'static str> {
        vec![]
    }
}
