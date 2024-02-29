use super::*;

#[doc=include_str!("readme.md")]
#[derive(Debug, Clone)]
pub struct TailwindGridRows {
    kind: GridTemplate,
}

impl Display for TailwindGridRows {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "grid-rows-{}", self.kind)
    }
}

impl TailwindInstance for TailwindGridRows {}

impl TailwindGridRows {
    pub fn parse(pattern: &[&str], arbitrary: &TailwindArbitrary) -> Result<Self> {
        Ok(Self { kind: GridTemplate::parse(pattern, arbitrary)? })
    }
}
